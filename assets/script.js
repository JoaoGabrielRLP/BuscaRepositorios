const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

const renderState = (type, message) => {
  const icon = type === 'loading' ? '⏳' : type === 'error' ? '⚠️' : '🔎';

  results.innerHTML = `
    <div class="state-box ${type}">
      <span>${icon}</span>
      <p>${message}</p>
    </div>
  `;
};

const formatStars = (count) => {
  return Number(count).toLocaleString('pt-BR');
};

const renderRepositories = (items) => {
  const cards = items
    .map((repo) => {
      const owner = repo.owner?.login || 'Desconhecido';
      const avatar = repo.owner?.avatar_url || 'https://github.com/github.png';
      const description = repo.description || 'Descrição indisponível.';
      const language = repo.language || 'Não informado';
      const stars = formatStars(repo.stargazers_count || 0);

      return `
        <article class="result-card">
          <img class="author-avatar" src="${avatar}" alt="Avatar de ${owner}" />

          <div class="repo-content">
            <div class="repo-header">
              <div>
                <p class="repo-owner">${owner}</p>
                <h2 class="repo-name">
                  <a class="repo-link" href="${repo.html_url}" target="_blank" rel="noreferrer">
                    ${repo.name}
                  </a>
                </h2>
              </div>
            </div>

            <p class="repo-description">${description}</p>

            <div class="repo-meta">
              <span class="meta-item"><strong>Linguagem:</strong> ${language}</span>
              <span class="meta-item"><strong>Estrelas:</strong> ${stars}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  results.innerHTML = cards;
};

const searchRepositories = async (term) => {
  if (!term.trim()) {
    renderState('empty', 'Digite um termo para buscar repositórios.');
    return;
  }

  renderState('loading', 'Carregando repositórios...');

  try {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(term)}&sort=stars&per_page=10`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Status da resposta: ${response.status}`);
    }

    const data = await response.json();
    const items = data.items || [];

    if (!items.length) {
      renderState('empty', 'Nenhum repositório encontrado para esse termo.');
      return;
    }

    renderRepositories(items);
  } catch (error) {
    console.error(error);
    renderState('error', 'Não foi possível carregar os repositórios. Tente novamente em instantes.');
  }
};

searchInput.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() !== 'enter') {
    return;
  }

  event.preventDefault();
  searchRepositories(searchInput.value);
});

renderState('empty', 'Digite um termo e pressione Enter para buscar repositórios.');

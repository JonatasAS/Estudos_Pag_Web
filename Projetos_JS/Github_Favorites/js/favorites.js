// classe que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load(){
    this.entries = [
      {
        login: 'JonatasAS',
        name: 'Jonatas_Amorim',
        public_repos: '13',
        followers: '19'
      },
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '76',
        followers: '120000'
      }
    ]
  }
}

// classe que vai criar a visualização e eventos do html

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector
    ('table tbody')

    this.update()
  }


  update() {
    this.removeAllTr()

    this.entries.forEach( user => {
      const row = this.createRow()
      
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td class="user">
      <img src="https://github.com/JonatasAS.png" alt="Imagem de JonatasAS">
      <a href="https://github.com/JonatasAS" target="_blank">
        <p>Jonatas Amorim</p>
        <span>JonatasAS</span>
      </a>
    </td>
    <td class="repositories">
      13
    </td>
    <td class="followers">
      19
    </td>
    <td>
      <button class="remove">&times;</button>
    </td>
    `
   return tr
  }

  removeAllTr() {
   
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}


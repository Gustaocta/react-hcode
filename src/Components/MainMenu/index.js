import React from 'react'
import { Home, Library, Search, Logo, NewPlaylist, MusicLike, PodCasts } from '../Utils/Icons';
import './MainMenu.css'

const playlists = [
    'MPB', 'Rock', 'Sertanejo', 'Samba', 'Pagode', 'Rap', 'Funk', 'Beatles', 'Opera', 'Samba Rock', 'Axé', 'Forró', 'Pop Rock', 'Trap', 'tecno Brega', 'modão', 'Calm Piano', 'POP', 'Acoustic', 'Sertanejo Universitario',
];

const mainMenuIcons = [
  {icon:<Home/>, label:"Home", link:'/home'},
  {icon:<Library/>, label:"Sua Biblioteca", link:'/library'},
  {icon:<PodCasts/>, label:"Seus PodCasts", link:'/podcast'},
  {icon:<Search/>, label:"Search", link:'/search'},
  {icon:<NewPlaylist/>, label:"Nova Playlist", link:'/newplaylist'},
  {icon:<MusicLike/>, label:"Music Like", link:'/musiclike'}
]

export default class MainMenu extends React.Component {
    constructor(props){
        super(props);
        this.handleNewPlaylist = this.handleNewPlaylist.bind(this);
        this.handleUpdateTitle = this.handleUpdateTitle.bind(this);
        this.state = {language:'pt-br', welcome: 'Bem-vindo ao Spotify'};
    }

    componentDidMount() {
      document.title = `Spotify - ${this.state.welcome}`;
    }

    componentDidUpdate() {
      document.title = `Alterou Spotify - ${this.state.welcome}`;
    }

    componentUnMount() {
      document.title = `Desmontou o componente - ${this.state.welcome}`;
    }


  render() {
    this.setState({language:'en'});
    return (
      <div className='mainMenu'>
        <div className='icons'>
          <div className='icon'>
            <Logo/>
          </div>  
          <ul>
          {mainMenuIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link}>
                {icon.icon}
                <span>{icon.label}</span>
              </a>
            </li>
          ))}
          </ul> 
        </div>
        <div className='playlists'>
            <ul>
                {playlists.map((playlist, index) => (
                    <li key={index}>
                        <a href={`#?playlist=${playlist}`} key={index}>
                            {playlist}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <button onClick={this.handleUpdateTitle}> Spotify Premium</button>
      </div>
    )
  }

  handleNewPlaylist(e) {
    alert('ADD nova Playlist');
  }

  handleUpdateTitle(e) {
    this.setState({ welcome: "Spotify.com novo título" });
    console.log('Alterando o título');
  }
}

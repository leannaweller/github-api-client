import { h, Component } from 'preact';
import './Repo.less';
import colors from '../colors.json';
import Modal from './Modal.jsx';
import moment from 'moment';

class Repo extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
  render({repo},{isOpen}){
    const langs = Object.keys(repo.languages_list);
    const  color = colors[langs[0]] || 'white';
    const style = {backgroundColor:color};
      return(
        <div className="repo-wrapper">
          <div class="repo-card" onClick={()=>{this.setState({isOpen:true})}}>
            <div class="repo-card__title"><a href="">{repo.name}</a></div>
              {
                repo.fork && <div>
                  fork
                </div>
              }
              {
                (repo.stargazers_count > 0) && <div>{repo.stargazers_count}</div>
              }
              <div>Updated: {moment(new Date(repo.updated_at)).fromNow()}</div>
            <div>
              {repo.description}
            </div>
            <div class="repo-card__lang-info">
              <span style={style} class='repo-card__lang-color'></span>
              {
                langs[0] && <span class='repo-card__lang-text'>{langs[0]}</span>
              }
            </div>
          </div>
          <Modal open={isOpen} onClose={() => this.setState({isOpen:false})}/>
        </div>
    );
  }

}

export default Repo;
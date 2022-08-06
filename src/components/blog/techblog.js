import {useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
// import './styles/blog.css'
function TechBlogPage(props){
    console.log(props.data.allTech.length)
    let {id}=useParams();


    return(
        <div className="blog-page">
            <h1>{id}</h1>
            {props.data.allTech.filter(items=>items.title===id).map(items=>(
                <div key={items.num} className="blog-page-content">
                    <img src={items.location} alt=""></img>
                    <p>{items.content}</p>
                    <div className="category-likes">
                        <span className="category">{items.category}</span>
                        <span className="hands-clapping"><FontAwesomeIcon icon={faHandsClapping} /> 1.1K likes</span>
                    </div>
                    <hr />
                </div>
            ))} 
            <div className="icon-name">
                <img src={props.data.articleIcon} alt=""></img>
                <div class="icon-details">
                    <h3>Written By:</h3>
                    <p>{props.data.blogOwner}</p>
                    {props.data.allTech.filter(items=>items.title===id).map(items=>(
                        <p>{items.date}</p>
                    ))}
                </div>
            </div>
            <div className="more-articles-section">
                <h2>More on Siren!</h2>
                <hr />
                <div className="more-siren">
                {props.data.recentTech.map(items=>(
                    <div key={items.num} className="more-page-content">
                        <img src={items.location} alt="" className="article-image"></img>
                        <h3><Link to={`/category/technology/${items.title}`} className="title-links">{items.title}</Link></h3>
                        <div className="icon-date">
                            <img src={props.data.articleIcon} alt=""></img>
                            <div className="owner-date">
                                <p>{props.data.blogOwner}</p>
                                <p>{items.date}</p>
                            </div>
                        </div>
                    </div>
            ))} 
                </div>
            </div>
        </div>
    )
}

export default TechBlogPage;
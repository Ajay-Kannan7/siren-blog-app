import {Link} from 'react-router-dom';
import '../tech/styles/tech.css';

function HollywoodPage(props){
    console.log(props)
    return(
        <div className="tech-wrapper">
            <div className="tech-all-posts">
                <h2 className="tech-all-header">Hollywood</h2>
                <div className="all-posts-wrapper">
                    {
                        props.data.allHollywood.map(items=>(
                            <div class="all-posts">
                                <img src={items.location} alt="" className="post-image"></img>
                                <div className="side-content">
                                    <h3><Link to={`/category/hollywood/${items.title}`} className="title-links">{items.title}</Link></h3>
                                    <p>{items.abstract}</p>
                                    <p className="category"><span style={{color:"black"}}>{items.category}</span>/ {items.date}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="tech-recent-posts">
                <h2 className="tech-recent-header">Top posts</h2>
                <div className="recent-posts-wrapper">
                    {
                        props.data.recentHollywood.map(items=>(
                            <div class="recent-posts">
                                <img src={items.location} alt="" className="post-image"></img>
                                <div className="side-content">
                                    <h3><Link to={`/category/hollywood/${items.title}`} className="title-links">{items.title}</Link></h3>
                                    <p className="category"><span style={{color:"black"}}>{items.category}</span>/ {items.date}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HollywoodPage;
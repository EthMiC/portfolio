import "./ContentTab.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function ContentTab(title, image, description, tags, link, sourceCode) {
    return (
        <div className="content-tab" >
            <div>
            <img className="content-tab-image" src={image} alt={title} />
            <h1 className="content-tab-title">{title}</h1>
            </div>
            <div className="content-tab-tags">{tags.map(tag => <div className="tags" key={`${Math.random()}}`}>{tag}</div>)}</div>
            <div className="content-description">{description}</div>
            <div className="extra-links">
                <Router>
                    {(link !== undefined && link !== "") ? <Link className="link" to={link} target="_blank"><img src={"/portfolio/link_images/web.svg"}/> Link</Link> : null}
                    {sourceCode !== undefined ? <Link className="source-code" to={sourceCode} target="_blank">{"</>"} Source</Link> : null}
                </Router>
            </div>
        </div>
    );
}

export default ContentTab;
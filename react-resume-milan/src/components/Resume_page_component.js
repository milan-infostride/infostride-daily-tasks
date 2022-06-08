
import JumbotronComponent from "./JumbotronComponent";
import Languages_component from "./Languages_component";
import About_me_component from "./About_me_component";

const Resume_page_component = () => {
    const top_style={
        marginTop : '5.5em'
    }
    let languages =  [{
        id: 1,
        title: "Vue.js",
        img: "images/vue.png"
    },
    {
        id: 2,
        title: "Laravel",
        img: "images/laravel.png"
    },
    {
        id: 3,
        title: "Mysql",
        img: "images/mysql.png"
    },
    {
        id: 4,
        title: "Html",
        img: "images/html.png"
    },
    {
        id: 5,
        title: "Js",
        img: "images/js.png"
    },
    {
        id: 6,
        title: "Bootstrap",
        img: "images/bootstrap.jpeg"
    },
    {
        id: 7,
        title: "PHP",
        img : "images/php.png"
    }

]
let projects = [{
    id:1,
    title: "Multi Vendor Ecommerce Platform",
    img: "images/ecom.png"
},
{
    id: 2,
    title : "Multi Blogger Bloging Platform",
    img: "images/blog.jpeg"
}
]
let education = [{
    id:1,
    title: "Dav College (B.C.A)",
    img: "images/bca.png"
},
{
    id:2,
    title : "GMSSS Sector-32 (12th)",
    img: "images/12th.jpeg"
},
{
    id:3,
    title: "Dav public school (10th)",
    img: "images/10th.jpeg"
}
]
const scrollTo = (ref) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  

    return (
        <div> 
        <JumbotronComponent />
        <div className="container">
            {/* <div className="row text-center">
                <h1 className="fs-2">Hi i am Milan</h1>
                <h3 className="fs-4 ms-3">Full stack Dev</h3>
            </div> */}
            <About_me_component id="about"></About_me_component>
            <Languages_component id="languages" data={languages} prop_title="Languages &#38; Frameworks Known" icon_class="fas fa-globe"></Languages_component>
            <Languages_component id="projects" data={projects} prop_title="Projects Done" icon_class="fas fa-clipboard-list"></Languages_component>
            <Languages_component id="education" data={education} prop_title="Education" icon_class="fas fa-university"></Languages_component>

        </div>
        </div>

     );
}
 
export default Resume_page_component;
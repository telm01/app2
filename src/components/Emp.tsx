interface EmpProps{
    Name:string ;
description:string;
image:string;

}
const Emp: React.FC<EmpProps> = ({Name, description, image}) => {
    const Empitems=[
        {
            Name:"telmen",
            description:"Manager of Social median and IT marketing ",
            image :"with-czech.jpg"
        },
        {
             Name:"telmen",
            description:"Manager of Social median and IT marketing ",
            image :"with-czech.jpg"
        },
        {
 Name:"telmen",
            description:"Manager of Social median and IT marketing ",
            image :"with-czech.jpg"
        },
    ];
    return(
        <section className="Emp-section">
            <div className="Emp-Image">{image}</div>
            <div className="Emp-Title">{Name}</div>
        </section>
    );
};
export default Emp;

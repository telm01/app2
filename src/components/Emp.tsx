interface EmpProps{
    Name:string ;
description:string;
image:string;

}
export default function Emp (props:any ){
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
            <div className="Emp-Image">{props.image}</div>
            <div className="Emp-Title">{props.name}</div>
        </section>
    );
    };


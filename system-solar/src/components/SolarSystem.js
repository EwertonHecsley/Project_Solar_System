import React from "react";
import Title from "./Title";

class SolarSystem extends React.Component {
    render() {

        const { planetName } = this.props

        return (
            <div data-testid="solar-system">
                <Title headline="Planetas" />
                <div className="div-planeta">
                    {planetName.map((foto, index) =>
                        <div className="nome-foto">
                            <img key={index} src={foto.image} name={foto.name} alt={foto.name} />
                            <p>{foto.name}</p>
                        </div>)}
                </div>
            </div>

        );
    }
};

export default SolarSystem;
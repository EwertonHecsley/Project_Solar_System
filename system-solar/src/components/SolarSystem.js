import React from "react";
import Title from "./Title";

class SolarSystem extends React.Component {
    render() {

        const { planetName } = this.props

        return (
            <div data-testid="solar-system">
                <Title headline="Planetas" />
                <div className="div-planeta">
                    {planetName.map((foto) => <img src={foto.image} alt={foto.name} />)}
                </div>
            </div>

        );
    }
};

export default SolarSystem;
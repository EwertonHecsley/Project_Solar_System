import React from "react";

class PlanetCards extends React.Component {
    render() {

        const { missions } = this.props

        return (
            <div className="div-planeta" data-testid="planet-card">
                <div className="cartoes">
                    {missions.map((missao, index) => <div key={index} className="div-teste"><span>{missao.name}</span>
                        <p>{missao.year}</p>
                        <p>{missao.country}</p>
                        <p>{missao.destination}</p>
                    </div>)}
                </div>
            </div>
        );
    }
};

export default PlanetCards;
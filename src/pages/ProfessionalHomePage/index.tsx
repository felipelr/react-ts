import React from "react";
import useAppSelector from "../../hooks/useAppSelector";

export interface ProfessionalHomePageProps { }

const ProfessionalHomePage: React.FC<ProfessionalHomePageProps> = (props) => {
    const { professional } = useAppSelector(state => state.professinal)

    return (
        <div>
            <h1>Professional Home</h1>
            <p>{`${professional?.name} - ${professional?.document}`}</p>
        </div>
    )
}

export default ProfessionalHomePage;
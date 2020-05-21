import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import CategoryTable from "../components/category-table"

const LenguageGo: React.FC = () => {
    return(
        <div>
            <Header></Header>            

            <div className="container">
                <Subheader 
                    title="Pagina Nueva de Lenguaje GO"                     
                />
                <div className="row">
                    <CategoryTable/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default LenguageGo;
import React from "react";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import { Shop } from "./layout/Shop";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Shop />
            <Footer />
        </React.Fragment>
    );
}

export default App;

import React from "react";
import SubscribeForm from "../Components/SubscribeForm";
import './Main.scss';

const Main = (props) => {
    return (
        <div className="main container">
            <div className="page-header">
                <h1>Main page</h1>
            </div>

            <div className="content">
                <section>
                    <h2>Lorem ipsum</h2>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio augue, sodales ut lorem at,
                    fermentum rhoncus justo. Vestibulum ultrices diam eget efficitur luctus. Vestibulum nec ipsum in
                    nisi imperdiet pulvinar ac sit amet tellus. Pellentesque lobortis ac sem a aliquet. In elementum
                    massa metus, vitae vehicula urna molestie et. Sed porta justo ac quam pharetra, id tincidunt eros
                    porta. Duis et augue in metus malesuada rutrum. Vestibulum quis tempor libero. Donec suscipit ut
                    lectus sit amet placerat.
                </section>
                <hr />
                <section>
                    <h2>Lorem ipsum</h2>

                    Vestibulum lacinia, dui sed varius condimentum, arcu odio molestie ipsum, eu molestie arcu mi sit
                    amet enim. Duis vitae sollicitudin nulla, at aliquam magna. Maecenas nec dui cursus, vehicula est
                    at, mattis urna. Etiam bibendum neque eu convallis sodales. Curabitur varius, massa sed malesuada
                    vestibulum, urna purus volutpat mauris, sed aliquam turpis est sit amet nisi. Donec malesuada in
                    erat a dignissim. Curabitur ornare nulla id luctus eleifend. Vivamus diam sapien, luctus sit amet
                    vehicula eget, commodo non nunc.
                </section>
                <hr />
                <section>
                    <SubscribeForm />
                </section>
            </div>
        </div>
    )
};

export default Main;

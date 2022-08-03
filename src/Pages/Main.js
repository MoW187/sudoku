import React from "react";
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
                    <h2>Lorem ipsum</h2>

                    Pellentesque nunc magna, sodales vel tincidunt non, vestibulum id magna. Nulla bibendum id purus a
                    eleifend. Aliquam erat volutpat. Donec nec mi vel lacus fermentum eleifend. Maecenas imperdiet
                    pharetra fringilla. Cras pharetra posuere odio in tristique. Suspendisse vel sem leo. Nullam
                    scelerisque, mi quis aliquam tincidunt, sapien nibh dictum nisl, ac varius felis lectus suscipit
                    dolor. Nulla consectetur orci at nibh accumsan, eu lobortis nisi malesuada. Nunc aliquet tristique
                    leo quis consectetur. Donec vitae tellus felis.
                </section>
            </div>
        </div>
    )
};

export default Main;

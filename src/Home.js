const Home = () => {

    return ( 
        <div className="home">
            <h2>About The Dashboard:</h2>
            <ul id="about">
                <li> This dashboard is used for visualization of different types of data </li>
            </ul>

            <h2> Using The Dashboard: </h2>

            <div id="use">
                <h3> Physical Activity: </h3>
                <ul>
                    <li> This tab will plot the average physical activity of the students on a particular day of the experiment </li>
                </ul>

                <h3> Sleeping Patterns: </h3>
                <ul>
                    <li> This tab will plot the average sleeping hours of the students on a particular day of the experiment </li>
                </ul>

                <h3> Social Interaction: </h3>
                <ul>
                    <li> This tab will lead you to a histogram which represents the distribution of number of students over 
                        the number of hours spent on telephonic conversation </li>
                </ul>

                <h3> Mobility: </h3>
                <ul>
                    <li> This tab will visualizes the density of students present on the different area of DA-IICT, 
                        according to the provided parameters </li>
                </ul>
            </div>

        </div>
    );
}
 
export default Home;
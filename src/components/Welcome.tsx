const Welcome = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-black mt-10">
            <div
                className="bg-white p-6 rounded shodow cursor-pointer hover:shadow-lg"
            >
                <h5>Hi, what is the weather</h5>
                <p className="text-gray-400 text-sm font-normal">
                    Get immediate AI generated response
                </p>
            </div>
            <div
                className="bg-white p-6 rounded shodow cursor-pointer hover:shadow-lg"
            >
                <h5>Hi, what is my location?</h5>
                <p className="text-gray-400 text-sm font-normal">
                    Get immediate AI generated response
                </p>
            </div>
            <div
                className="bg-white p-6 rounded shodow cursor-pointer hover:shadow-lg"
            >
                <h5>Hi, how are you</h5>
                <p className="text-gray-400 text-sm font-normal">
                    Get immediate AI generated response
                </p>
            </div>
            <div
                className="bg-white p-6 rounded shodow cursor-pointer hover:shadow-lg"
            >
                <h5>Hi, what is the temperature</h5>
                <p className="text-gray-400 text-sm font-normal">
                    Get immediate AI generated response
                </p>
            </div>
        </div>
    );
};

export default Welcome;

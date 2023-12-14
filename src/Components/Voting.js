import React, { useState } from 'react';

export default function Voting({ setScreen, vote, candidates }) {
    const [showConfirmation, setShowConfirmation] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <button
                className="bg-blue-500 text-white absolute top-20 left-10 px-4 py-2 rounded-lg mx-auto"
                onClick={() => setScreen('home')}
            >
                Back
            </button>
            <h1 className="text-4xl font-extrabold my-4 text-black">VOTING</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                {candidates.map((candidate, i) => (
                    <div key={i} className="bg-blue-200 p-4 rounded-lg shadow-md text-center">
                        <img src={candidate.imageUri} alt="Candidate" className="w-40 h-40 rounded-full mx-auto" />
                        <h1 className="text-2xl font-bold text-black">{candidate.name}</h1>
                        <button
                            onClick={() => {
                                // Show a confirmation message
                                setShowConfirmation(true);

                                // After navigating, call the vote function with i+1
                                setTimeout(() => {
                                    vote(i + 1);
                                    // Reset the confirmation state
                                    setShowConfirmation(false);
                                    // Navigate back to the home screen
                                    setTimeout(()=>{
                                        setScreen('home');
                                    },15000)
                                    
                                }, 1000); // You can adjust the delay (in milliseconds) as needed
                            }}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg "
                        >
                            Vote
                        </button>
                    </div>
                ))}
            </div>
            {/* Conditional rendering of the confirmation message */}
            {showConfirmation && (
                <div className="absolute bottom-20 bg-white p-4 rounded-lg shadow-md">
                    Confirming vote...
                </div>
            )}
        </div>
    );
}

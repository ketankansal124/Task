import React, { useEffect, useState } from 'react';

const Submission = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/TUF/v1/submissions')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data.submissions)) {
                    setEntries(data.submissions);
                } else {
                    console.error('Data.submission is not an array:', data.submissions);
                }
            })
            .catch(error => console.error('Error fetching entries:', error));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Submitted Entries</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Username</th>
                            <th className="px-4 py-2 text-left">Code Language</th>
                            <th className="px-4 py-2 text-left">Standard Input</th>
                            <th className="px-4 py-2 text-left">Source Code</th>
                            <th className="px-4 py-2 text-left">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry, index) => (
                            <tr key={index} className={(index % 2 === 0) ? 'bg-gray-100' : ''}>
                                <td className="border px-4 py-2">{entry.username}</td>
                                <td className="border px-4 py-2">{entry.codeLanguage}</td>
                                <td className="border px-4 py-2">{entry.stdin}</td>
                                <td className="border px-4 py-2">{entry.sourceCode.substring(0, 100)}</td>
                                <td className="border px-4 py-2">{entry.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Submission;

import React, { useState } from 'react';

function PayrollSettings() {
    const [basicSalary, setBasicSalary] = useState(492000);
    const [conveyanceAllowance, setConveyanceAllowance] = useState(61500);
    const [medicalAllowance, setMedicalAllowance] = useState(61500);
    const [specialAllowance, setSpecialAllowance] = useState(123000);
    const [otherAllowances, setOtherAllowances] = useState(123000);
    const [pfPercentage, setPfPercentage] = useState(12); // Example PF percentage
    const [esiPercentage, setEsiPercentage] = useState(0.75); // Example ESI percentage
    const [loading, setLoading] = useState(false);

    const handleSaveSettings = () => {
        setLoading(true);
        setTimeout(() => {
            // Simulate saving settings
            console.log('Payroll settings saved:', {
                basicSalary,
                conveyanceAllowance,
                medicalAllowance,
                specialAllowance,
                otherAllowances,
                pfPercentage,
                esiPercentage,
            });
            setLoading(false);
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 space-y-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Payroll Settings</h1>

                <table className="w-full bg-gray-50 border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700 font-semibold">
                            <th className="p-4 text-left">Setting</th>
                            <th className="p-4 text-left">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Basic Salary */}
                        <tr>
                            <td className="p-4 border-t border-gray-200">Basic Salary</td>
                            <td className="p-4 border-t border-gray-200">
                                <input
                                    type="number"
                                    value={basicSalary}
                                    onChange={(e) => setBasicSalary(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    min="0"
                                />
                            </td>
                        </tr>
                        {/* Conveyance Allowance */}
                        <tr>
                            <td className="p-4 border-t border-gray-200">Conveyance Allowance</td>
                            <td className="p-4 border-t border-gray-200">
                                <input
                                    type="number"
                                    value={conveyanceAllowance}
                                    onChange={(e) => setConveyanceAllowance(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    min="0"
                                />
                            </td>
                        </tr>
                        {/* Medical Allowance */}
                        <tr>
                            <td className="p-4 border-t border-gray-200">Medical Allowance</td>
                            <td className="p-4 border-t border-gray-200">
                                <input
                                    type="number"
                                    value={medicalAllowance}
                                    onChange={(e) => setMedicalAllowance(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    min="0"
                                />
                            </td>
                        </tr>
                        {/* Special Allowance */}
                        <tr>
                            <td className="p-4 border-t border-gray-200">Special Allowance</td>
                            <td className="p-4 border-t border-gray-200">
                                <input
                                    type="number"
                                    value={specialAllowance}
                                    onChange={(e) => setSpecialAllowance(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    min="0"
                                />
                            </td>
                        </tr>
                        {/* Other Allowances */}
                        <tr>
                            <td className="p-4 border-t border-gray-200">Other Allowances</td>
                            <td className="p-4 border-t border-gray-200">
                                <input
                                    type="number"
                                    value={otherAllowances}
                                    onChange={(e) => setOtherAllowances(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    min="0"
                                />
                            </td>
                        </tr>
                        {/* Provident Fund Percentage */}
                        <tr>
                            <td className="p-4 border-t border-gray-200">Provident Fund (PF) Percentage</td>
                            <td className="p-4 border-t border-gray-200">
                                <input
                                    type="number"
                                    value={pfPercentage}
                                    onChange={(e) => setPfPercentage(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    min="0"
                                    step="0.01"
                                />
                            </td>
                        </tr>
                        {/* Employee State Insurance Percentage */}
                        <tr>
                            <td className="p-4 border-t border-gray-200">Employee State Insurance (ESI) Percentage</td>
                            <td className="p-4 border-t border-gray-200">
                                <input
                                    type="number"
                                    value={esiPercentage}
                                    onChange={(e) => setEsiPercentage(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    min="0"
                                    step="0.01"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Save Settings Button */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleSaveSettings}
                        className={`px-8 py-4 text-white font-semibold rounded-lg shadow-md ${loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} transition-colors duration-300`}
                        disabled={loading}
                    >
                        {loading ? 'Saving...' : 'Save Settings'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PayrollSettings;

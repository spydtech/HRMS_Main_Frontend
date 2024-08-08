import React, { useState } from 'react';

function AssignStructure() {
    const [employeeName, setEmployeeName] = useState('');
    const [basicSalary, setBasicSalary] = useState(492000);
    const [conveyanceAllowance, setConveyanceAllowance] = useState(61500);
    const [medicalAllowance, setMedicalAllowance] = useState(61500);
    const [specialAllowance, setSpecialAllowance] = useState(123000);
    const [otherAllowances, setOtherAllowances] = useState(123000);
    const [pf, setPf] = useState(59040);
    const [esi, setEsi] = useState(3690);
    const [netPay, setNetPay] = useState(798270);
    const [loading, setLoading] = useState(false);
    const [assigned, setAssigned] = useState(false);

    const calculateNetPay = () => {
        setLoading(true);
        setTimeout(() => {
            const basic = parseFloat(basicSalary) || 0;
            const conveyance = parseFloat(conveyanceAllowance) || 0;
            const medical = parseFloat(medicalAllowance) || 0;
            const special = parseFloat(specialAllowance) || 0;
            const other = parseFloat(otherAllowances) || 0;
            const pfAmount = parseFloat(pf) || 0;
            const esiAmount = parseFloat(esi) || 0;
            const gross = basic + conveyance + medical + special + other;
            const totalDeductions = pfAmount + esiAmount;

            setNetPay(gross - totalDeductions);
            setLoading(false);
        }, 500); // Simulate a delay for better user experience
    };

    const handleAssignStructure = () => {
        setLoading(true);
        setTimeout(() => {
            // Simulate saving the structure assignment
            console.log(`Assigned structure to ${employeeName}`);
            setAssigned(true);
            setLoading(false);
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 space-y-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Assign Salary Structure</h1>

                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 mb-6">
                    <label className="text-gray-700 font-semibold mb-2 block">Employee Name</label>
                    <input
                        type="text"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter employee name"
                    />
                </div>

                <table className="w-full bg-gray-50 border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700 font-semibold">
                            <th className="p-4 text-left">Component</th>
                            <th className="p-4 text-left">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
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
                        <tr>
                            <td className="p-4 border-t border-gray-200">Provident Fund (PF)</td>
                            <td className="p-4 border-t border-gray-200">
                                <input
                                    type="number"
                                    value={pf}
                                    onChange={(e) => setPf(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    min="0"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 border-t border-gray-200">Employee State Insurance (ESI)</td>
                            <td className="p-4 border-t border-gray-200">
                                <input
                                    type="number"
                                    value={esi}
                                    onChange={(e) => setEsi(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    min="0"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Calculate Button */}
                <div className="flex justify-center mb-6">
                    <button
                        onClick={calculateNetPay}
                        className={`px-8 py-4 text-white font-semibold rounded-lg shadow-md ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} transition-colors duration-300`}
                        disabled={loading}
                    >
                        {loading ? 'Calculating...' : 'Calculate Net Pay'}
                    </button>
                </div>

                {/* Net Pay */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Net Pay</h2>
                    <p className="text-4xl font-bold text-gray-900">{netPay.toFixed(2)}</p>
                </div>

                {/* Assign Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleAssignStructure}
                        className={`px-8 py-4 text-white font-semibold rounded-lg shadow-md ${loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} transition-colors duration-300`}
                        disabled={loading}
                    >
                        {loading ? 'Assigning...' : 'Assign Structure'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AssignStructure;

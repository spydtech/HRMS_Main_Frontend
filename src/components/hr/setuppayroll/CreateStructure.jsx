import React, { useState } from 'react';

function CreateStructure() {
    const [basicSalary, setBasicSalary] = useState(492000);
    const [conveyanceAllowance, setConveyanceAllowance] = useState(61500);
    const [medicalAllowance, setMedicalAllowance] = useState(61500);
    const [specialAllowance, setSpecialAllowance] = useState(123000);
    const [otherAllowances, setOtherAllowances] = useState(123000);
    const [pf, setPf] = useState(59040);
    const [esi, setEsi] = useState(3690);
    const [netPay, setNetPay] = useState(798270);
    const [loading, setLoading] = useState(false);

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

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 space-y-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Create Payroll Structure</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Basic Salary */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                        <label className="text-gray-700 font-semibold mb-2 block">Basic Salary</label>
                        <input
                            type="number"
                            value={basicSalary}
                            onChange={(e) => setBasicSalary(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter basic salary"
                            min="0"
                        />
                    </div>

                    {/* Conveyance Allowance */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                        <label className="text-gray-700 font-semibold mb-2 block">Conveyance Allowance</label>
                        <input
                            type="number"
                            value={conveyanceAllowance}
                            onChange={(e) => setConveyanceAllowance(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter conveyance allowance"
                            min="0"
                        />
                    </div>

                    {/* Medical Allowance */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                        <label className="text-gray-700 font-semibold mb-2 block">Medical Allowance</label>
                        <input
                            type="number"
                            value={medicalAllowance}
                            onChange={(e) => setMedicalAllowance(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter medical allowance"
                            min="0"
                        />
                    </div>

                    {/* Special Allowance */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                        <label className="text-gray-700 font-semibold mb-2 block">Special Allowance</label>
                        <input
                            type="number"
                            value={specialAllowance}
                            onChange={(e) => setSpecialAllowance(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter special allowance"
                            min="0"
                        />
                    </div>

                    {/* Other Allowances */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                        <label className="text-gray-700 font-semibold mb-2 block">Other Allowances</label>
                        <input
                            type="number"
                            value={otherAllowances}
                            onChange={(e) => setOtherAllowances(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter other allowances"
                            min="0"
                        />
                    </div>

                    {/* Provident Fund */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                        <label className="text-gray-700 font-semibold mb-2 block">Provident Fund (PF)</label>
                        <input
                            type="number"
                            value={pf}
                            onChange={(e) => setPf(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter PF amount"
                            min="0"
                        />
                    </div>

                    {/* Employee State Insurance (ESI) */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                        <label className="text-gray-700 font-semibold mb-2 block">Employee State Insurance (ESI)</label>
                        <input
                            type="number"
                            value={esi}
                            onChange={(e) => setEsi(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter ESI amount"
                            min="0"
                        />
                    </div>
                </div>

                {/* Calculate Button */}
                <div className="flex justify-center">
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
            </div>
        </div>
    );
}

export default CreateStructure;

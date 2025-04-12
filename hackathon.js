document.addEventListener("DOMContentLoaded", () => {
    // Populate Execution Log
    const executionLog = document.getElementById("execution-log");
    const logs = [
        "15:14:33 MentalHealthAnalyzerAgent: Detected Mood is anxious",
        "15:14:34 EmergencyTriageAgent: Level 3 -> Cardiology",
        "15:14:35 DoctorSchedulerAgent: Assigned Dr. Miley Phoenix to John Doe",
        "15:14:36 BedManagerAgent: John Doe assigned to Ward bed 305 (Triage 3)",
        "15:14:38 ConflictResolverAgent: No doctors available at this moment. Queuing the application."
    ];

    logs.forEach(log => {
        const logDiv = document.createElement("div");
        logDiv.textContent = log;
        executionLog.appendChild(logDiv);
    });

    // Populate Doctor Status
    const doctorStatus = document.getElementById("doctor-status");
    const doctors = [{
            name: "Dr. Sarah Miller",
            specialty: "Cardiology",
            status: "busy",
            endsAt: "2025-04-06 15:13:03"
        },
        {
            name: "Dr. Jamie Jones",
            specialty: "Dentist",
            status: "available"
        },
        {
            name: "Dr. James Lee",
            specialty: "Pediatrics",
            status: "available"
        },
        {
            name: "Dr. Miley Phoenix",
            specialty: "Cardiology",
            status: "available"
        },
        {
            name: "Dr. Priya Sharma",
            specialty: "Neurology",
            status: "available"
        }
    ];

    doctors.forEach(doctor => {
        const doctorDiv = document.createElement("div");
        doctorDiv.className = `doctor ${doctor.status}`;
        doctorDiv.innerHTML = `
            <strong>${doctor.name}</strong> (${doctor.specialty})
            <span>${doctor.status === "busy" ? `Ends at: ${doctor.endsAt}` : "Ready for patients"}</span>
        `;
        doctorStatus.appendChild(doctorDiv);
    });
});
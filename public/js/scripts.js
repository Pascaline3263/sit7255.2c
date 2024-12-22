document.addEventListener('DOMContentLoaded', () => {
    // Return to Main Menu
    const btnBackToMain = document.getElementById('btnBackToMain');
    if (btnBackToMain) {    
        btnBackToMain.addEventListener('click', () => {
            window.location ='http://localhost:3000/';
        });
    };
    
    // Display Add Child Form
    const btnAddChildForm = document.getElementById('btnAddChildForm');
    if (btnAddChildForm) {    
        btnAddChildForm.addEventListener('click', () => {
            window.location ='http://localhost:3000/child';
        });
    };

    // Display Add Offline Activity Form
    const btnAddOfflineActivityForm = document.getElementById('btnAddOfflineActivityForm');
    if (btnAddOfflineActivityForm) {    
        btnAddOfflineActivityForm.addEventListener('click', () => {
            window.location.href='http://localhost:3000/offlineActivity';
        });
    };

    // Display Add Timer Form
    const btnTimerForm = document.getElementById('btnTimerForm');
    if (btnTimerForm) {    
        btnTimerForm.addEventListener('click', () => {
            window.location.href='http://localhost:3000/timer';
        });
    };


    // Add Child information to database
    const btnAddChild = document.getElementById('btnAddChild');
    if (btnAddChild) {
        btnAddChild.addEventListener('click', () => {
            const childData = {
                childName: document.getElementById('childName').value,
                dailyAllowancePoints: document.getElementById('dailyAllowancePoints').value,
                dailyLimitPoints: document.getElementById('dailyLimitPoints').value,
                pointsValue: document.getElementById('pointsValue').value,
            };
            fetch('/api/child', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(childData),
            })
            .then(response => {
                if (response.ok) {
                    alert('Child account created!');
                } else {
                    alert('Error creating account.');
                }
            });
        });
    };

    // Add Offline Activity information to database
    const btnAddOfflineActivity = document.getElementById('btnAddOfflineActivity');
    if (btnAddOfflineActivity) {
        btnAddOfflineActivity.addEventListener('click', () => {
            const offlineActivityData = {
                offlineActivityName: document.getElementById('offlineActivityName').value,
                pointsPerHour: document.getElementById('pointsPerHour').value,
            };
            fetch('/api/offline-activity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(offlineActivityData),
            })
            .then(response => {
                if (response.ok) {
                    alert('Offline activity created!');
                } else {
                    alert('Error creating offline activity.');
                }
            });
        });
    };
});
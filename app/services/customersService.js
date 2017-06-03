//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('customersService', function () {
    this.getCustomers = function () {
        return customers;
    };

    this.getPlaylists = function () {
        return playlists;
    };

    this.getMedications = function () {
        return medications;
    };

    this.getPatients = function () {
        return patients;
    };

    this.getTasks = function () {
        return tasks;
    };

    this.getVitals = function () {
        return vitals;
    };

    this.getLabs = function () {
        return labs;
    };

    this.getConditions = function () {
        return conditions;
    };

    this.getDiagnoses = function () {
        return diagnoses;
    };

    this.getProcedures = function () {
        return procedures;
    };

    this.getImmunizations = function () {
        return immunizations;
    };

    this.getGoals = function () {
        return goals;
    };

    this.getTiles = function () {
        return tiles;
    };

    this.getAssessments = function () {
        return assessments;
    };

    this.getRecAssessments = function () {
        return recassessments;
    };

    this.getQuestions = function () {
        return questions;
    };

    this.getMessages = function () {
        return messages;
    };

    this.getProblems = function () {
        return problems;
    };

    this.insertCustomer = function (firstName, lastName, city) {
        var topID = customers.length + 1;
        customers.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            city: city
        });
    };

    this.deleteCustomer = function (id) {
        for (var i = customers.length - 1; i >= 0; i--) {
            if (customers[i].id === id) {
                customers.splice(i, 1);
                break;
            }
        }
    };

    this.getPatient = function (id) {
        for (var i = 0; i < patients.length; i++) {
            if (patients[i].id === id) {
                return patients[i];
            }
        }
        return null;
    };

    var patients = [
        {
            id: 1,
            name: {
                last: 'Johnson', first: 'Betsy'
            },
            age: 74, insurer: 'Aetna PPO Basic 70/30', hotspot: true, gender: 'Female', city: 'Folkston', state: 'GA', watchlist: true, checked: false,
            physician: {
                last: 'Pearlman', first: 'Laura', middle: 'M'
            },
            managers: [
                'Miriam Kakeba',
                'Joyce Rosenovich'
            ],
            diagnoses: [
                'COPD'
            ],
            tasks: {
                time: 'Tomorrow', type: 'Outreach', status: 'Open', step: '3'
            },
            playlist: {
                title: 'Adult Weight Management', patients: 14, steps: 7, effectiveness: 28, goal: 'Reduce Patients BMI between 18 and 25%', stepPosition: 4, stepDescription: 'Brochure: Low Glycemic Foods'
            },
            hotspots: [
                { title: 'Encounter', day: 'Today', time: 'Anytime', type: 'Follow Up', assessment: 'Oncology', flag: 'encounter' },
                { title: 'Screen Clinical Depression', day: '2 days ago', type: 'Procedure', flag: 'procedures', reason: 'Patient did not attend scheduled appointment 02/03/2014' },
                { title: 'HgA1c Blood Sugar Test', day: '2 days ago', type: 'Lab Result', flag: 'labs', reason: ' HgA1c outside normal range' }
            ]
        },
        {
            id: 2,
            name: {
                last: 'McCormick', first: 'John'
            },
            age: 70, insurer: 'Aetna HSA Basic', hotspot: true, gender: 'Male', city: 'Jacksonville', state: 'FL', watchlist: false, checked: false,
            physician: {
                last: 'Beller', first: 'George', middle: 'A'
            },
            managers: [
                'Joyce Rosenovich',
                'Miriam Kakeba'
            ],
            diagnoses: [
                'Diabetes - Adult'
            ],
            tasks: {
                time: 'Today', type: 'Outreach', status: 'Open', step: '3'
            },
            playlist: {
                title: 'Adult Weight Management', patients: 14, steps: 7, effectiveness: 28, goal: 'Reduce Patients BMI between 18 and 25%', stepPosition: 3, stepDescription: 'Brochure: Low Glycemic Foods'
            },
            hotspots: [
                { title: 'Encounter', day: 'Today', time: 'Anytime', type: 'Follow Up', assessment: 'Oncology', flag: 'encounter' },
                { title: 'Screen Clinical Depression', day: '2 days ago', type: 'Procedure', flag: 'procedures', reason: 'Patient did not attend scheduled appointment 02/03/2014' },
                { title: 'HgA1c Blood Sugar Test', day: '2 days ago', type: 'Lab Result', flag: 'labs', reason: ' HgA1c outside normal range' }
            ]
        },
        {
            id: 3,
            name: {
                last: 'Rodriguez', first: 'Marco'
            },
            age: 68, insurer: 'Aetna PPO Plus 80/20', hotspot: true, gender: 'Male', city: 'Lake City', state: 'FL', watchlist: true, checked: false,
            physician: {
                last: 'DiMarco', first: 'John', middle: 'P'
            },
            managers: [
                'Miriam Kakeba',
                'Joyce Rosenovich'
            ],
            diagnoses: [
                'Toxocariasis'
            ],
            tasks: {
                time: 'Today', type: 'Consent Letter', status: 'Open', step: '4'
            },
            playlist: {
                title: 'Diabetes 101', patients: 14, steps: 7, effectiveness: 28, goal: 'Reduce Patients BMI between 18 and 25%', stepPosition: 4, stepDescription: 'Brochure: Low Glycemic Foods'
            },
            hotspots: [
                { title: 'Encounter', day: 'Today', time: 'Anytime', type: 'Follow Up', assessment: 'Oncology', flag: 'encounter' },
                { title: 'Screen Clinical Depression', day: '2 days ago', type: 'Procedure', flag: 'procedures', reason: 'Patient did not attend scheduled appointment 02/03/2014' },
                { title: 'HgA1c Blood Sugar Test', day: '2 days ago', type: 'Lab Result', flag: 'labs', reason: ' HgA1c outside normal range' }
            ]
        },
        {
            id: 4,
            name: {
                last: 'Cryer', first: 'Valerie'
            },
            age: 82, insurer: 'Aetna HSA Basic', hotspot: true, gender: 'Female', city: 'Auburn', state: 'CA', watchlist: true, checked: false,
            physician: {
                last: 'Reinhard', first: 'Christy', middle: 'G'
            },
            managers: [
                'Joyce Rosenovich',
                'Miriam Kakeba'
            ],
            diagnoses: [
                'Acariasis'
            ],
            tasks: {
                time: 'Today', type: 'New Cond. Start', status: 'Open', step: 5
            },
            playlist: {
                title: 'End of Life Issues', patients: 14, steps: 7, effectiveness: 28, goal: 'Reduce Patients BMI between 18 and 25%', stepPosition: 5, stepDescription: 'Brochure: Low Glycemic Foods'
            },
            hotspots: [
                { title: 'Encounter', day: 'Today', time: 'Anytime', type: 'Follow Up', assessment: 'Oncology', flag: 'encounter' },
                { title: 'Screen Clinical Depression', day: '2 days ago', type: 'Procedure', flag: 'procedures', reason: 'Patient did not attend scheduled appointment 02/03/2014' },
                { title: 'HgA1c Blood Sugar Test', day: '2 days ago', type: 'Lab Result', flag: 'labs', reason: ' HgA1c outside normal range' }
            ]
        },
        {
            id: 5,
            name: {
                last: 'Fujiyama', first: 'Dave'
            },
            age: 34, insurer: 'Aetna HSA Basic', hotspot: true, gender: 'Male', city: 'Salt Lake City', state: 'UT', watchlist: false, checked: false,
            physician: {
                last: 'David', first: 'Harry', middle: 'N'
            },
            managers: [
                'Miriam Kakeba',
                'Joyce Rosenovich'
            ],
            diagnoses: [
                'Depression'
            ],
            tasks: {
                time: 'Tomorrow', type: 'Consent Letter', status: 'Open', step: '3'
            },
            hotspots: [
                { title: 'Encounter', day: 'Today', time: 'Anytime', type: 'Follow Up', assessment: 'Oncology', flag: 'encounter' },
                { title: 'Screen Clinical Depression', day: '2 days ago', type: 'Procedure', flag: 'procedures', reason: 'Patient did not attend scheduled appointment 02/03/2014' },
                { title: 'HgA1c Blood Sugar Test', day: '2 days ago', type: 'Lab Result', flag: 'labs', reason: ' HgA1c outside normal range' }
            ]
        },
        {
            id: 6,
            name: {
                last: 'Smith', first: 'Roxie'
            },
            age: 63, insurer: 'Aetna PPO Basic 70/30', hotspot: false, gender: 'Female', city: 'Phoenix', state: 'AZ', watchlist: false, checked: false,
            physician: {
                last: 'Annamma', first: 'Mathew', middle: 'V'
            },
            managers: [
                'Joyce Rosenovich',
                'Miriam Kakeba'
            ],
            diagnoses: [
                'Breast Cancer'
            ],
            hotspots: []
        },
        {
            id: 7,
            name: {
                last: 'Beachlerie', first: 'Diana'
            },
            age: 51, insurer: 'Aetna PPO Plus 80/20', hotspot: false, gender: 'Female', city: 'Austin', state: 'TX', watchlist: false, checked: false,
            physician: {
                last: 'Houlihan', first: 'Jean', middle: 'M'
            },
            managers: [
                'Miriam Kakeba',
                'Joyce Rosenovich'
            ],
            diagnoses: [
                'Ulcerative Colitis'
            ],
            hotspots: []
        },
        {
            id: 8,
            name: {
                last: 'Marshall', first: 'Maurice'
            },
            age: 47, insurer: 'Aetna PPO Basic 70/30', hotspot: false, gender: 'Male', city: 'Chicago', state: 'IL', watchlist: false, checked: false,
            physician: {
                last: 'Reinhard', first: 'Christy', middle: 'G'
            },
            managers: [
                'Joyce Rosenovich',
                'Miriam Kakeba'
            ],
            diagnoses: [
                'Parkinson\'s Disease',
            ],
            hotspots: []
        },
        {
            id: 9,
            name: {
                last: 'Copelandid', first: 'Larry'
            },
            age: 61, insurer: 'Aetna HSA Basic', hotspot: false, gender: 'Male', city: 'Seattle', state: 'WA', watchlist: false, checked: false,
            physician: {
                last: 'Houlihan', first: 'Jean', middle: 'M'
            },
            managers: [
                'Miriam Kakeba',
                'Joyce Rosenovich'
            ],
            diagnoses: [
                'Cystic Fibrosis - Adult'
            ],
            hotspots: []
        },
        {
            id: 10,
            name: {
                last: 'Cooper', first: 'Norman'
            },
            age: 88, insurer: 'Aetna PPO Basic 70/30', hotspot: false, gender: 'Male', city: 'Portland', state: 'OR', watchlist: false, checked: false,
            physician: {
                last: 'Pearlman', first: 'Laura', middle: 'M'
            },
            managers: [
                'Joyce Rosenovich',
                'Miriam Kakeba'
            ],
            diagnoses: [
                'Colorectal Cancer'
            ],
            hotspots: []
        },
        {
            id: 11,
            name: {
                last: 'O\'Brian', first: 'Robin'
            },
            age: 43, insurer: 'Aetna PPO Plus 80/20', hotspot: false, gender: 'Female', city: 'Concord', state: 'NH', watchlist: false, checked: false,
            physician: {
                last: 'Reinhard', first: 'Christy', middle: 'G'
            },
            managers: [
                'Miriam Kakeba',
                'Joyce Rosenovich'
            ],
            diagnoses: [
                'Migraines'
            ],
            hotspots: []
        },
        {
            id: 12,
            name: {
                last: 'Haverstock', first: 'Julia'
            },
            age: 77, insurer: 'Aetna HSA Premium', hotspot: false, gender: 'Female', city: 'Boston', state: 'MA', watchlist: false, checked: false,
            physician: {
                last: 'Annamma', first: 'Mathew', middle: 'V'
            },
            managers: [
                'Joyce Rosenovich',
                'Miriam Kakeba'
            ],
            diagnoses: [
                'Osteoporosis'
            ],
            hotspots: []
        },
        {
            id: 13,
            name: {
                last: 'Schwarzenegger', first: 'Arnold'
            },
            age: 70, insurer: 'Aetna PPO Basic 70/30', hotspot: false, gender: 'Male', city: 'St. Louis', state: 'MO', watchlist: false, checked: false,
            physician: {
                last: 'Pearlman', first: 'Laura', middle: 'M'
            },
            managers: [
                'Miriam Kakeba',
                'Joyce Rosenovich'
            ],
            diagnoses: [
                'Not a tumor'
            ],
            hotspots: []
        },
        {
            id: 14,
            name: {
                last: 'Merkel', first: 'Christina'
            },
            age: 67, insurer: 'Aetna HSA Basic', hotspot: false, gender: 'Female', city: 'New York', state: 'NY', watchlist: false, checked: false,
            physician: {
                last: 'Reinhard', first: 'Christy', middle: 'G'
            },
            managers: [
                'Joyce Rosenovich',
                'Miriam Kakeba'
            ],
            diagnoses: [
                'Hepatitis - Chronic'
            ],
            hotspots: []
        },
        {
            id: 15,
            name: {
                last: 'Cartenuto', first: 'Stephanie'
            },
            age: 56, insurer: 'Aetna PPO Plus 80/20', hotspot: false, gender: 'Female', city: 'San Francisco', state: 'CA', watchlist: false, checked: false,
            physician: {
                last: 'Houlihan', first: 'Jean', middle: 'M'
            },
            managers: [
                'Miriam Kakeba',
                'Joyce Rosenovich'
            ],
            diagnoses: [
                'Diabetes - Adult'
            ],
            hotspots: []
        }
    ];

    var messages = [
        {
            manager: 'Miriam', from: 'Linda Donna', body: 'Sit amet, dictum sit amet justo donec. Magnis dis parturient montes, nascetur ridiculus mus mauris vitae. Enim, facilisis gravida neque convallis a cras semper auctor. Dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis.'
        },
        {
            manager: 'Miriam', from: 'You', body: 'Molestie nunc, non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut. Faucibus vitae aliquet nec, ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam. Aenean euismod elementum nisi, quis eleifend quam adipiscing vitae proin sagittis, nisl rhoncus mattis rhoncus. Amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel. Mattis vulputate enim nulla aliquet porttitor lacus, luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo.'
        },
        {
            manager: 'Miriam', from: 'Shirley Marks', body: 'Nulla facilisi morbi tempus iaculis urna, id volutpat lacus. Nunc, sed blandit libero volutpat sed. A, iaculis at erat pellentesque adipiscing commodo elit, at imperdiet dui accumsan sit. Cras pulvinar mattis nunc, sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis. Ac turpis egestas sed tempus, urna et pharetra pharetra, massa massa ultricies mi, quis.'
        }
    ];

    var problems = [
        {
            title: 'Diabetic and no HgA1c in the last 6 months', encounter: '01/21/2024', assessment: 'Adult Behavioral Health'
        },
        {
            title: 'Diabetic and no HgA1c in the last 6 months', encounter: '01/21/2024', assessment: 'Adult Behavioral Health'
        },
        {
            title: 'Diabetic and no HgA1c in the last 6 months', encounter: '01/21/2024', assessment: 'Adult Behavioral Health'
        },
        {
            title: 'Diabetic and no HgA1c in the last 6 months', encounter: '01/21/2024', assessment: 'Adult Behavioral Health'
        }
    ];

    var tiles = [
        {
            title: 'Diabetes HgA1c Control (<8%)', abb: 'ACO 22', compliance: '58.64', benchmark: '11.36', direction: 'down', hotspot: true
        },
        {
            title: 'Diabetes LDL-C Control', abb: 'ACO 23', compliance: '51.22', benchmark: '13.67', direction: 'down', hotspot: true
        },
        {
            title: 'Colorectal Cancer Screening', abb: 'HEDIS', compliance: '61.02', benchmark: '18.98', direction: 'down', hotspot: true
        },
        {
            title: 'Diabetes HgA1c Poor Control', abb: 'ACO 27', compliance: '14.88', benchmark: '3.37', direction: 'up', hotspot: true
        },
        {
            title: 'Diabetes - Tobacco Non Use', abb: 'ACO 25', compliance: '83.81', benchmark: '8.19', direction: 'down', hotspot: true
        },
        {
            title: 'Comprehensive Diabetes Care LDL-C Screening', abb: 'HEDIS', compliance: '84.12', benchmark: '5.88', direction: 'down', hotspot: true
        },
        {
            title: 'Blueberry Muffin Rash'
        },
        {
            title: 'Nutmeg Liver'
        },
        {
            title: 'Watermelon Stomach'
        },
        {
            title: 'Cauliflower Ear'
        },
        {
            title: 'Strawberry Gallbladder'
        },
        {
            title: 'Chocolate Cyst'
        },
        {
            title: 'Port Wine Stain'
        },
        {
            title: 'Bread and Butter Pericarditis'
        },
        {
            title: 'Currant Jelly Sputum'
        },
        {
            title: 'Cafe au Lait Spot'
        }
    ];

    var medications = [
        {
            title: 'Celecoxib', dosage: 'Capsule (hard, soft, etc.) 200mg', state: 'Active'
        },
        {
            title: 'Glipizide/Metformin HCL', dosage: 'Tablet 2.5-250mg', state: 'Not Reviewed'
        },
        {
            title: 'Metformin HCL', dosage: 'Tablet 100mg', state: 'Inactive'
        }
    ];

    var goals = [
        {
            title: 'Adult Weight Management', goal: 'Lose 40 lbs by July 15th, 2014', task: '3/1/14 : Class &ndash; In-home Exercise'
        },
        {
            title: 'Diabetes 1', goal: 'Reduce HgA1C to healthy range', task: '4/15/14 : HgA1C Appointment'
        }
    ];

    var vitals = [
        {
            title: 'Screen Clinical Depression', result: 25, range: '10 - 20', date: '01/05/2014', source: 'CT'
        },
        {
            title: 'Body mass index (BMI) [Ratio]', result: 25, range: '10 - 20', date: '01/05/2014', source: 'CT'
        },
        {
            title: 'Body weight stated', result: 120, range: '10 - 25', date: '01/04/2014', source: 'PCP'
        },
        {
            title: 'Body height stated', result: 64, range: '10 - 25', date: '01/04/2014', source: 'CT'
        }
    ];

    var labs = [
        {
            title: 'HgA1C Blood Sugar Test', result: 6.9, range: '4 - 5.6', date: '01/05/2014', source: 'CT'
        },
        {
            title: 'Lipoprotein.beta.subparticle [Entitic length]', result: 20.8, range: 20.8, date: '01/04/2014', source: 'PCP'
        },
        {
            title: 'Diastolic blood pressure', result: 70, range: '10 - 25', date: '01/04/2014', source: 'PCP'
        },
        {
            title: 'Systolic blood pressure', result: 115, range: '10 - 25', date: '01/04/2014', source: 'CT'
        }
    ];

    var playlists = [
        {
            title: 'Adult Weight Management', patients: 14, steps: 7, effectiveness: 28, goal: 'Reduce Patients BMI between 18 and 25%', stepPosition: 4, stepDescription: 'Brochure: Low Glycemic Foods', hotspot: true
        },
        {
            title: 'Diabetes 101', patients: 8, steps: 8, effectiveness: 33, goal: 'HgA1c results between 8 and 9%', stepPosition: 6, stepDescription: 'Class: Better Glucose Monitoring', hotspot: true
        },
        {
            title: 'End of Life Issues', patients: 22, steps: 9, effectiveness: 53, goal: 'HgA1c results between 8 and 9%', stepPosition: 9, stepDescription: 'Class: Leaving a Safe Financial Legacy', hotspot: false
        }
    ];

    var tasks = [
        {
            id: 1, lastName: 'Mildred', firstName: 'Joel', time: 'Today at 12pm',today: true, type: 'Outreach', status: 'Open', physician: 'Dr. Henry Real', playlist: 'Adult Weight Management', step: 3, hotspot: true, note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu erat eu neque porttitor ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus', selected: false, gender: 'male'
        },
        {
            id: 2, lastName: 'Beachlerie', firstName: 'Diana', time: 'Anytime Today', today: true, type: 'Consent Letter', status: 'Open', physician: 'Dr. Sharon Jones', playlist: 'Diabetes 101', step: 4, hotspot: true, note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu erat eu neque porttitor ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus', selected: false, gender: 'female'
        },
        {
            id: 3, lastName: 'Smith', firstName: 'Eaton', time: 'Anytime Today', today: true, type: 'New Cond. Start', status: 'Open', physician: 'Dr. Brian C. Knowles', playlist: 'None selected', step: 0, hotspot: false, note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu erat eu neque porttitor ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus', selected: false, gender: 'male'
        },
        {
            id: 4, lastName: 'Johnson', firstName: 'Betsy', time: 'Anytime Tomorrow', today: false, type: 'Outreach', status: 'Open', physician: 'Harry N. David, MD', playlist: 'Adult Weight Management', step: 3, hotspot: true, note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu erat eu neque porttitor ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus', selected: false, gender: 'female'
        }
    ];

    var conditions = [
        {
            title: 'Cholesterol Secondary', tests: '6.9', notes: '4 - 5.6%', risk: 'High Risk'
        },
        {
            title: 'Coronary Artery Disease', tests: '3', notes: '9', risk: 'Moderate Risk'
        },
        {
            title: 'Hypertension Adult', tests: '4', notes: '8', risk: 'Low Risk'
        }
    ];

    var diagnoses = [
        {
            date: '1/21/2014', code: 'ICD9M-1', description: 'Other disorder of menstration and other abnormal bleeding from'
        },
        {
            date: '1/21/2014', code: 'ICD9M-1', description: 'Lumbosacral spondylosis without myelopathy'
        },
        {
            date: '1/21/2014', code: 'ICD9M-1', description: 'Malignant neoplasm of bladder, part unspecified'
        },
        {
            date: '1/21/2014', code: 'ICD9M-1', description: 'Spinal stenosis of lumbar region, without neurogenic claudication'
        },
        {
            date: '1/21/2014', code: 'ICD9M-1', description: 'Paroxysmal superaventricular tachycardia'
        }
    ];

    var procedures = [
        {
            title: 'Screen Clinical Depression', total: 1, hotspot: true
        },
        {
            title: 'Assay of Glycated Protein', total: 6
        },
        {
            title: 'Collection of Venous Blood Venipuncture', total: 1
        },
        {
            title: 'Comprehensive Metabolic Panel', total: 8
        },
        {
            title: 'Creatine Other Source', total: 1
        }
    ];

    var immunizations = [
        {
            title: 'Administration of Influenza vaccine', total: 3
        },
        {
            title: 'IMADM PRQ ID SUBQ/IM NJXS 1 Vaccine', total: 6
        },
        {
            title: 'Influenza virus vaccine trivalent 3 yrs plus IM', total: 1
        },
        {
            title: 'Pneumococcal Polysac vaccine 23-V 2', total: 8
        },
        {
            title: 'IMADM Intransl/Oral 1 Vaccine', total: 1
        }
    ];

    var assessments = [
        {
            title: 'Adult Behavioral Health', category: 'Case Management', status: 90
        },
        {
            title: 'Asthma Adult', category: 'Disease Management', status: 100
        },
        {
            title: 'At Risk for Colon Cancer', category: 'Disease Management', status: 10
        },
        {
            title: 'At Risk for Coronary Artery Disease (CAD)', category: 'Disease Management', status: 100
        },
        {
            title: 'Breast Cancer', category: 'Case Management', status: 100
        },
        {
            title: 'Depression', category: 'Disease Management', status: 10
        },
        {
            title: 'Oncology Assessment', category: 'Disease Management', status: 100
        }
    ];

    var recassessments = [
        {
            title: 'Chronic Kidney Disease', hotspot: true
        },
        {
            title: 'Chronic Obstructive Pulmonary Disease (COPD)', hotspot: true
        },
        {
            title: 'Hypertension - Vascular Condition', hotspot: true
        },
        {
            title: 'Oncology', hotspot: false
        }
    ];

    var questions = [
        "What, if anything, do you know about what blood pressure numbers mean?",
        "Do you know your most recent blood pressure?",
        "Waht has your doctor told you about what your blood pressure should be?",
        "Has your doctor given you a target value for what your blood pressure should be?"
    ];

    var customers = [
        {
            id: 1, firstName: 'Lee', lastName: 'Carroll', address: '1234 Anywhere St.', city: 'Phoenix',
            orders: [
                { product: 'Basket', price: 29.99, quantity: 1, orderTotal: 29.99 },
                { product: 'Yarn', price: 9.99, quantity: 1, orderTotal: 39.96 },
                { product: 'Needes', price: 5.99, quantity: 1, orderTotal: 5.99 }
            ]
        },
        {
            id: 2, firstName: 'Jesse', lastName: 'Hawkins', address: '89 W. Center St.', city: 'Atlanta',
            orders: [
                { product: 'Table', price: 329.99, quantity: 1, orderTotal: 329.99 },
                { product: 'Chair', price: 129.99, quantity: 4, orderTotal: 519.96 },
                { product: 'Lamp', price: 89.99, quantity: 5, orderTotal: 449.95 },
            ]
        },
        {
            id: 3, firstName: 'Charles', lastName: 'Sutton', address: '455 7th Ave.', city: 'Quebec',
            orders: [
                { product: 'Call of Duty', price: 59.99, quantity: 1, orderTotal: 59.99 },
                { product: 'Controller', price: 49.99, quantity: 1, orderTotal: 49.99 },
                { product: 'Gears of War', price: 49.99, quantity: 1, orderTotal: 49.99 },
                { product: 'Lego City', price: 49.99, quantity: 1, orderTotal: 49.99 }
            ]
        },
        {
            id: 4, firstName: 'Albert', lastName: 'Einstein', address: '8966 N. Crescent Dr.', city: 'New York City',
            orders: [
                { product: 'Baseball', price: 9.99, quantity: 5, orderTotal: 49.95 },
                { product: 'Bat', price: 19.99, quantity: 1, orderTotal: 19.99 }
            ]
        },
        {
            id: 5, firstName: 'Sonya', lastName: 'Williams', address: '55 S. Hollywood Blvd', city: 'Los Angeles'
        },
        {
            id: 6, firstName: 'Victor', lastName: 'Bryan', address: '563 N. Rainier St.', city: 'Seattle',
            orders: [
                { product: 'Speakers', price: 499.99, quantity: 1, orderTotal: 499.99 },
                { product: 'iPod', price: 399.99, quantity: 1, orderTotal: 399.99 }
            ]
        },
        {
            id: 7, firstName: 'Lynette', lastName: 'Gonzalez', address: '25624 Main St.', city: 'Albuquerque',
            orders: [
                { product: 'Statue', price: 429.99, quantity: 1, orderTotal: 429.99 },
                { product: 'Picture', price: 1029.99, quantity: 1, orderTotal: 1029.99 }
            ]
        },
        {
            id: 8, firstName: 'Erick', lastName: 'Pittman', address: '33 S. Lake Blvd', city: 'Chicago',
            orders: [
                { product: 'Book: AngularJS Development', price: 39.99, quantity: 1, orderTotal: 39.99 },
                { product: 'Book: Basket Weaving Made Simple', price: 19.99, quantity: 1, orderTotal: 19.99 }
            ]
        },
        {
            id: 9, firstName: 'Alice', lastName: 'Price', address: '3354 Town', city: 'Cleveland',
            orders: [
                { product: 'Webcam', price: 85.99, quantity: 1, orderTotal: 85.99 },
                { product: 'HDMI Cable', price: 39.99, quantity: 2, orderTotal: 79.98 }
            ]
        },
        {
            id: 10, firstName: 'Gerard', lastName: 'Tucker', address: '6795 N. 53 W. Bills Dr.', city: 'Buffalo',
            orders: [
                { product: 'Fan', price: 49.99, quantity: 4, orderTotal: 199.96 },
                { product: 'Remote Control', price: 109.99, quantity: 1, orderTotal: 109.99 }
            ]
        },
        {
            id: 11, firstName: 'Shanika', lastName: 'Passmore', address: '459 S. International Dr.', city: 'Orlando'
        }
    ];

});

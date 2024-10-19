class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let uniqueCandidates = [];
        candidates.forEach((candidate) => {
            let [name, education, yearsExperience] = candidate.split('-');
            yearsExperience = Number(yearsExperience);
            const findName = this.jobCandidates.find((canName) => canName.name === name);
            if (findName) {
                if (yearsExperience > findName.yearsExperience) {
                    findName.yearsExperience = yearsExperience;
                }
            }
            else {
                this.jobCandidates.push({ name, education, yearsExperience });
                if (!uniqueCandidates.includes(name)) {
                    uniqueCandidates.push(name);
                }
            }
        });
        return `You successfully added candidates: ${uniqueCandidates.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);
        const findName = this.jobCandidates.find((canName) => canName.name === name);
        if (findName === undefined) throw new Error(`${name} is not in the candidates list!`);
        else {
            if (minimalExperience > findName.yearsExperience) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
            }
        }
        findName.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const findName = this.jobCandidates.find((canName) => canName.name === name);
        if (findName === undefined) throw new Error(`${name} is not in the candidates list!`);
        else if (findName.education === 'Bachelor') return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        else if (findName.education === 'Master') return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        else return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) throw new Error('Candidate Database is empty!');
        let result = 'Candidates list:';
        let sortedCandidates = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        sortedCandidates.forEach((candidate) => {
            result += `\n${candidate.name}-${candidate.yearsExperience}`;
        });
        return result;
    }
}
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());
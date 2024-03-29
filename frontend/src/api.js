import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

export class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response.data);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    console.log(res.company.jobs)
    return res.company;
  }

  // obviously, you'll add a lot here ...

// get companies
  static async getAllCompanies() {
    let res = await this.request('companies');
    return res.companies;

  }

//get list of all jobs
  static async getJobs() {
    let res = await this.request('jobs');
    return res.jobs;
  }

// sign up for site
  static async signUp(username, password, firstName, lastName, email) {
    let res = await this.request('auth/register', 
    {username, password, firstName, lastName, email }, "post")
    return res
  }

//get signed in user 
  static async getUsers(username) {
    let res = await this.request(`users/${username}`, {username})
    return res
  }

// look up company via search term  
  static async getSearch(term) {
    let res = await this.request('companies/search', {term});
    return res;
  }

// get jobs available for each company by handle
  static async getJobsByCompany(handle) {
    let res = await this.request(`companies/${handle}`);

    return res.company.jobs
  }

//user login  
  static async loginUser(username, password){
    let res = await this.request("auth/token",  {username, password}, 'post')
    return res

  }

//edit user profile
  static async editUser(username, firstName, lastName){
    let res = await this.request(`users/${username}`,  {firstName, lastName}, "patch")
    return res
  }


// apply for job
  static async applyToJob(username, jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {username, jobId}, 'post')
    console.log(res)
    return res
  }

// get list of applied jobs
  static async appliedJobs(username) {
    let res = await this.request(`users/${username}/jobs`)
    console.log(res)
    return res
  }



}
// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";





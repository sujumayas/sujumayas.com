<template>
  <Layout>
    <div class="inner-container">
      <h1>About me</h1>
      <p>Let me tell you a little about myself. </p>

      <p>I am a philosopher that changed tracks 6 years ago to be a programmer. I think it was one of the best decisions in my life because I really love what I do now. I have been doing web development in a professional environment for the last 5 years and a half after that. </p>

      <p>Currently,  I see myself as a senior developer in JavaScript, altho I have also done a lot of relevant work for "other parts" of the software development industry: project management, project estimation, information architecture, some UI design, some UX research, client management, QA, Teaching, Customer Support, etc. (the perks of starting your own company)  </p> 

      <p>I have worked more than 4 years developing Wordpress sites, coding projects that go from informative landing pages to big-scope e-commerce sites with vue.js spa infrastructure on the views side.</p>

      <p>All this time, I have been doing more work in the frontend than the backend, specializing in JavaScript and Vuejs in the last 2 years. 
      This is a list of the coding skills:
      </p>
      <ul>
        <li>JavaScript (Advanced knowledge of ES6 and Frameworks like Vuejs)</li>
        <li>Wordpress</li>
        <li>PHP (Laravel), Python (Flask), Node (Express, Sails)... some serverside knowledge</li>
        <li>HTML&CSS (SASS, BEM, ITCSS, npm scripts) I have done 2-3 years of teaching practice of this.</li>
      </ul>
        <p>
        <pre>
          describe("esen-espinosa", () => {
              allowedDescriptors = ['philosopher', 'sistemic therapyst', 'gamer', 'husband', 'programmer']
              desiredDescriptors = ['medieval warrior', 'secret agent', 'private investigator', 'AI robot']
              notAllowedDescriptors = ['walking dead', 'yasuo main', 'pc technician', 'dota player']

              allowedDescriptors.forEach((descriptor)=>{
                it(`${descriptor} should be allowed`, ()=>{
                  expect(godCreatingMe(descriptor)).toBe(true)
                })
              })

              desiredDescriptors.forEach((descriptor)=>{
                it(`${descriptor} should be allowed`, ()=>{
                  expect(godCreatingMe(descriptor)).toBeTruthy();
                })
              })

              notAllowedDescriptors.forEach((descriptor)=>{
                it(`${descriptor} should be allowed`, ()=>{
                  expect(godCreatingMe(descriptor)).toBe(false);
                })
              })
          })
        </pre>
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
<style>
p pre{
  max-width:80%;
  margin:0 0 0 -50px;
}
</style>

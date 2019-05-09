<template>
  <Layout>
    <div class="inner-container">
      <h1>About me</h1>
      <p>
        <pre>
          describe("esen-espinosa", () => {
              allowedDescriptors = ['philosopher', 'sistemic therapyst', 'gamer', 'husband', 'programmer']
              desiredDescriptors = ['medieval warrior', 'spy specialist', 'private investigator', 'AI robot']
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

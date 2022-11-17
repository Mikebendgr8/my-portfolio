import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "z5otlqto",
    dataset: "production",
    useCDN: true,
    apiVersion: "2022-11-14"
})
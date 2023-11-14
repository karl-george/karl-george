import { client } from './lib/client';

export const getProjects = async () => {
  try {
    const projects = await client.fetch(`*[_type == "project"]{
      _id,
      title,
      codeLink,
      liveLink,
      "image": image.asset->url
    } | order(_createdAt desc)`);
    return projects;
  } catch (error) {
    console.log(error);
  }
};

export const getSkills = async () => {
  try {
    const skills = await client.fetch(`*[_type == "skills"]{
      _id,
      title,
      "image": image.asset->url
    } | order(_createdAt desc)`);
    return skills;
  } catch (error) {
    console.log(error);
  }
};

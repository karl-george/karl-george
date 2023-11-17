import { client } from './lib/client';

export const getProjects = async () => {
  try {
    const projects =
      await client.fetch(`*[_type == "project"] | order(_createdAt asc) {
      _id,
      title,
      codeLink,
      liveLink,
      "image": image.asset->url
    } `);
    return projects;
  } catch (error) {
    console.log(error);
  }
};

export const getSkills = async () => {
  try {
    const skills =
      await client.fetch(`*[_type == "skills"] | order(_createdAt asc) {
      _id,
      title,
      "image": image.asset->url
    } `);
    return skills;
  } catch (error) {
    console.log(error);
  }
};

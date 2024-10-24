export async function getAllJobs(query?: string) {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/jobs${query ? `?${query}` : ""}`
    );
    if (!res.ok) throw new Error("Something went wrong!");

    const data = await res.json();

    return data;
  } catch (error) {
    return (error as Error).message;
  }
}

export async function getOneJob(id: string) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/jobs/${id}`);
    if (!res.ok) throw new Error("Something went wrong!");

    const data = await res.json();

    return data;
  } catch (error) {
    return (error as Error).message;
  }
}

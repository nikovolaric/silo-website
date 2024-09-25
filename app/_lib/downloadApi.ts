export async function getAllDownloads(query?: string) {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/downloads${query ? `?site=${query}` : ""}`
    );

    if (!res.ok) {
      throw new Error("Ups! Nekaj je šlo narobe");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return (error as Error).message;
  }
}

export async function getOneDownload(id: string) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/downloads/${id}`);

    if (!res.ok) {
      throw new Error("Ups! Nekaj je šlo narobe");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return (error as Error).message;
  }
}

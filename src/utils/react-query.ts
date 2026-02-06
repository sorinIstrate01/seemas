export const handleReactQueryResponse = async (response: Response) => {
  if (!response.ok) {
    const { error } = await response.json();

    throw new Error(error || response.statusText);
  }

  return response.json();
};

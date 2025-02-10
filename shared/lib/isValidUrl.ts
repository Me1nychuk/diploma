const isValidUrl = (str: string): boolean => {
  const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
  return urlPattern.test(str);
};

export default isValidUrl;

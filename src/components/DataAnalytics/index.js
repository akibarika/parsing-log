import React from 'react';

const DataAnalytics = ({data}) => {
  if (!data || data.length === 0) return
  const uniqueIps = data.map(item => item.ip)
    .filter((value, index, self) => self.indexOf(value) === index)


  const getMostFrequent = (arr) => {
    const hashmap = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
    }, {})
    const hashToArray = Object.keys(hashmap)
    const sortedArray = hashToArray.sort((a, b) => hashmap[b] - hashmap[a])
    return sortedArray.slice(0, 3)
  }
  const mostFrequentIp = getMostFrequent(data.map(item => item.ip))
  const mostFrequentUrls = getMostFrequent(data.map(item => item.URL))
  return (
    <>
      <ul>
        <li>The number of unique IP addresses: {uniqueIps.length}</li>
        <li>The top 3 most visited URLs: {mostFrequentUrls.join(', ')}</li>
        <li>The top 3 most active IP addresses: {mostFrequentIp.join(', ')}</li>
      </ul>
    </>

  );
};

export default DataAnalytics;

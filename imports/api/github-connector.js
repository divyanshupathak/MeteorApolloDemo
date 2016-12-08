import rp from 'request-promise';

// This gives you a place to put GitHub API keys, for example
export const GITHUB_API_SECRET = '9320700144cda47e34454301f0ab5a780113c85b';
export const GITHUB_API_KEY = '2dcb594143ee6bcb2a22';

// const { GITHUB_API_KEY, GITHUB_API_SECRET } = process.env;
const qs = { GITHUB_API_KEY, GITHUB_API_SECRET };
export default function getRepositoryByName(name) {
	return rp({
		uri: `https://api.github.com/repos/${name}`,
		qs,
	});
}
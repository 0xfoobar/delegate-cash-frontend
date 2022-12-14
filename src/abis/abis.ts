export const IDelegationRegistryABI = [
	'event DelegateForAll(address vault, address delegate, bool value)',
	'event DelegateForContract(address vault, address delegate, address contract_, bool value)',
	'event DelegateForToken(address vault, address delegate, address contract_, uint256 tokenId, bool value)',
	'event RevokeAllDelegates(address vault)',
	'event RevokeDelegate(address vault, address delegate)',
	'function checkDelegateForAll(address delegate, address vault) view returns (bool)',
	'function checkDelegateForContract(address delegate, address vault, address contract_) view returns (bool)',
	'function checkDelegateForToken(address delegate, address vault, address contract_, uint256 tokenId) view returns (bool)',
	'function delegateForAll(address delegate, bool value)',
	'function delegateForContract(address delegate, address contract_, bool value)',
	'function delegateForToken(address delegate, address contract_, uint256 tokenId, bool value)',
	'function getContractLevelDelegations(address vault) view returns (tuple(address contract_, address delegate)[] delegations)',
	'function getDelegatesForAll(address vault) view returns (address[])',
	'function getDelegatesForContract(address vault, address contract_) view returns (address[])',
	'function getDelegatesForToken(address vault, address contract_, uint256 tokenId) view returns (address[])',
	'function getDelegationsByDelegate(address delegate) view returns (tuple(uint8 type_, address vault, address delegate, address contract_, uint256 tokenId)[])',
	'function getTokenLevelDelegations(address vault) view returns (tuple(address contract_, uint256 tokenId, address delegate)[] delegations)',
	'function revokeAllDelegates()',
	'function revokeDelegate(address delegate)',
	'function revokeSelf(address vault)'
];

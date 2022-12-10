window.SIDEBAR_ITEMS = {"enum":[["ConflictReason","All possible reasons that a package might fail to activate."],["ResolveBehavior","Resolver behavior, used to opt-in to new behavior that is backwards-incompatible via the `resolver` field in the manifest."]],"struct":[["DepsFrame",""],["RcVecIter",""],["RemainingDeps","Note that an `OrdSet` is used for the remaining dependencies that need activation. This set is sorted by how many candidates each dependency has."],["ResolveOpts","Options for how the resolve should work."],["ResolverProgress",""]],"type":[["ConflictMap","A list of packages that have gotten in the way of resolving a dependency. If resolving a dependency fails then this represents an incompatibility, that dependency will never be resolve while all of these packages are active. This is useless if the packages can’t be simultaneously activated for other reasons."],["DepInfo","Information about the dependencies for a crate, a tuple of:"],["FeaturesSet","The preferred way to store the set of activated features for a package. This is sorted so that it impls Hash, and owns its contents, needed so it can be part of the key for caching in the `DepsCache`. It is also cloned often as part of `Context`, hence the `RC`. `im-rs::OrdSet` was slower of small sets like this, but this can change with improvements to std, im, or llvm. Using a consistent type for this allows us to use the highly optimized comparison operators like `is_subset` at the interfaces."]]};
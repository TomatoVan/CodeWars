class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallest = args[0]

        args.forEach(i => (i < smallest) && (smallest = i))

        return smallest
    }
}

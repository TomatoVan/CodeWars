function combat(health, damage) {
	if (health < damage) return 0
	return health - damage
}
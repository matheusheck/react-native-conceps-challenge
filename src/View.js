<View style={styles.repositoryContainer}>
    <Text style={styles.repository}>Repository 1</Text>
    <View style={styles.techsContainer}>
        <Text style={styles.tech}>
            ReactJS
        </Text>
        <Text style={styles.tech}>
            Node.js
        </Text>
    </View>

    <View style={styles.likesContainer}>
        <Text
            style={styles.likeText}
            // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
            testID={`repository-likes-1`}
        >
            3 curtidas
        </Text>
    </View>
    <TouchableOpacity
            style={styles.button}
            onPress={() => handleLikeRepository(1)}
            // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
            testID={`like-button-1`}
          >
            <Text style={styles.buttonText}>Curtir</Text>
    </TouchableOpacity>
</View>
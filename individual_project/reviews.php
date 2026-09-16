<?php $currentPage = "Reviews";?>

<?php
include "assets/inc/login.php";
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['submit'])) {
    $name = htmlspecialchars($_POST['name'] ?? 'Anonymous');
    $rating = $_POST['rating'] ?? '';
    $comment = htmlspecialchars($_POST['comment'] ?? '');

    $stmt = $conn->prepare("INSERT INTO review (`name`, `rating`, `comment`) VALUES (?, ?, ?)");

    if (!$stmt) {
            die("Prepare failed: " . $conn->error);
        }

    $stmt->bind_param("sss", $name, $rating, $comment);
    
    if ($stmt->execute()) {
        header("Location: " . $_SERVER['PHP_SELF']);
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}
?>

<?php include "assets/inc/head.php"; ?>

    <?php include "assets/inc/nav.php"; ?>

            <main id="reviews">
                <header class="title">
                    <h1>The World of Sonic the Hedgehog</h1>
                </header>

                <h2 class="subtitle">
                    Reviews
                </h2>
            
                <section id="form">
                    <h3>Write a Review:</h3>
                    <form id="formobject" method="POST" action="">
                        <section>
                            <label for="name">State your name: </label>
                            <input type="text" name="name" id="name">
                        </section>

                        <section>
                            <p>How would you rate your experience on this site?</p>
                                <input type="radio" id="1star" name="rating" value="1★">
                                <label for="1star">1★</label>
                                
                                <input type="radio" id="2star" name="rating" value="2★">
                                <label for="2star">2★</label>
                                
                                <input type="radio" id="3star" name="rating" value="3★">
                                <label for="3star">3★</label>
                                
                                <input type="radio" id="4star" name="rating" value="4★">
                                <label for="4star">4★</label>
                                
                                <input type="radio" id="5star" name="rating" value="5★">
                                <label for="5star">5★</label>

                        </section>

                        <section>
                        <label for="comment">Type your detailed review here:</label><br><br>
                        <textarea name="comment" id="comment" placeholder="My expirience with this site was..."></textarea>
                        </section>

                        <input type="submit" name="submit" id="submit style" value="Submit response">
                    </form>
                    <div style="color: #e42c2c; margin-bottom: 10px;" id="error"></div>
                </section>

                <section class="subcontent" id="current-reviews">
 
                    <h3>Previous Reviews:</h3>
                        <?php
                        $sql = "SELECT name, rating, comment FROM review ORDER BY id DESC";
                        $result = $conn->query($sql);
                        if (!$result) {
                        echo "Query Error: " . $conn->error; 
                        }
                        if ($result->num_rows > 0) {
                            // output data of each row
                            while($row = $result->fetch_assoc()) {
                                echo "<section style='border-bottom: 1px solid #6163d8'; margin-bottom: 10px; padding: 10px;'>";
                                echo "<strong>" . $row["name"]. "</strong> - ";
                                echo "<span>" . $row["rating"]. "</span>";
                                echo "<p>" . $row["comment"]. "</p>";
                                echo "</section>";
                            }
                        } else {
                            echo "<p>No reviews yet. Be the first to write one!</p>";
                        }
                        ?>
                </section>
            </main>

    <script src="assets/js/menu.js"></script>
    <script src="assets/js/form.js"></script>
</body>
</html>
<?php $conn->close();?>

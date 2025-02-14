import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GreetingCard } from "./Thiep";
import { Fireworks } from "./Phaobong";

export const MoveImage = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [isCelebrating, setIsCelebrating] = useState(false);
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);  // Thêm state cho thiệp
    const [areImagesVisible, setAreImagesVisible] = useState(false);  // Thêm state cho hình ảnh
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);  // Kiểm tra nhạc có đang phát không

    const handleHeartClick = () => {
        setIsOpened(!isOpened);
        setIsCelebrating(!isCelebrating);
        setIsHeartClicked(true);
        setIsMusicPlaying(true);  // Khi bấm trái tim thì bật nhạc
    };

    useEffect(() => {
        if (isHeartClicked) {
            // Đợi một thời gian ngắn trước khi hiển thị thiệp
            setTimeout(() => {
                setIsCardVisible(true);
            }, 1000); // Độ trễ 1s trước khi thiệp xuất hiện

            // Sau thiệp, hiển thị các hình ảnh
            setTimeout(() => {
                setAreImagesVisible(true);
            }, 2800); // Độ trễ 2s trước khi các tấm hình xuất hiện
        }
    }, [isHeartClicked]);

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {/* Phát nhạc khi bấm trái tim */}
            {isMusicPlaying && (
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Yph556TaPqM?autoplay=1&loop=1&playlist=Yph556TaPqM"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: -1,
                        opacity: 0.5, // Làm mờ video nếu muốn
                    }}
                />
            )}

            {/* Pháo bông */}
            {isCelebrating && <Fireworks />}

            {/* Thiệp */}
            {isCardVisible && <GreetingCard />}

            {/* Hộp quà */}
            {!isHeartClicked && (
                <motion.div
                    initial={{ y: -300 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2, type: "spring", stiffness: 50 }}
                    style={{
                        width: "200px",
                        height: "200px",
                        position: "absolute",
                        top: "40%",
                        left: "43%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/assets/istockphoto-1347689822-612x612__1_-removebg-preview.png"
                        style={{ width: "300px" }}
                        alt="Gift Box"
                    />
                    <motion.div
                        initial={{ height: "50px" }}
                        animate={{
                            height: isOpened ? "0px" : "50px",
                            scaleY: isOpened ? 0.5 : 1,
                        }}
                        transition={{ duration: 1, type: "spring", stiffness: 150 }}
                        style={{
                            width: "100%",
                            borderRadius: "15px 15px 0 0",
                            position: "absolute",
                            bottom: 185,
                            left: -7,
                            zIndex: 1,
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="/assets/istockphoto-1347689822-612x612-removebg-preview__1_-removebg-preview.png"
                            style={{ width: "200px" }}
                            alt="Gift Box Lid"
                        />
                    </motion.div>
                    <motion.div
                        onClick={handleHeartClick}
                        whileHover={{ scale: 1.2 }}
                        style={{
                            position: "absolute",
                            zIndex: 2,
                            fontSize: "40px",
                            cursor: "pointer",
                            color: "white",
                        }}
                    >
                        ❤️
                    </motion.div>
                </motion.div>
            )}

            {/* Các hình ảnh */}
            {areImagesVisible && (
                <>
                    <motion.img
                        src="/assets/1.jpg"
                        alt="Image 1"
                        style={{
                            position: "absolute",
                            top: '330px',
                            width: "350px",
                            left: "10%",
                            willChange: "transform",  // Tối ưu hóa hiệu suất
                        }}
                        initial={{ x: "-100vw" }} // Bắt đầu từ bên trái
                        animate={{ x: "15%" }} // Di chuyển vào giữa và dừng ở khoảng cách 15% từ trái
                        transition={{ type: "spring", stiffness: 30, duration: 1.5 }} // Giảm stiffness và thời gian
                    />
                    <motion.img
                        src="/assets/2.jpg"
                        alt="Image 2"
                        style={{
                            position: "absolute",
                            top: '330px',
                            width: "350px",
                            left: "52%",
                            transform: "translateX(-50%)",
                            willChange: "transform",  // Tối ưu hóa hiệu suất
                        }}
                        initial={{ x: "100vw" }} // Bắt đầu từ bên phải
                        animate={{ x: "50%" }} // Di chuyển vào giữa và dừng ở giữa
                        transition={{ type: "spring", stiffness: 30, duration: 1.5 }} // Giảm stiffness và thời gian
                    />
                    <motion.img
                        src="/assets/3.jpg"
                        alt="Image 3"
                        style={{
                            position: "absolute",
                            top: '330px',
                            width: "280px",
                            left: "41%",
                            willChange: "transform",  // Tối ưu hóa hiệu suất
                        }}
                        initial={{ y: -100 }} // Vị trí ban đầu của hộp quà từ trên xuống
                        animate={{ y: 0 }} // Hộp quà sẽ di chuyển xuống
                        transition={{ type: "spring", stiffness: 30, duration: 1.5 }} // Giảm stiffness và thời gian
                    />
                </>
            )}
        </div>
    );
};

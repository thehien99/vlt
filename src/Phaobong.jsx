import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Fireworks = () => {
    const [fireworks, setFireworks] = useState([]); // Dùng state để lưu pháo hoa

    useEffect(() => {
        // Hàm tạo pháo hoa mới
        const createFirework = () => {
            const delay = Math.random() * 2; // Độ trễ ngẫu nhiên
            const size = Math.random() * 20 + 10; // Kích thước pháo hoa ngẫu nhiên

            // Tạo pháo hoa với các thuộc tính ngẫu nhiên
            const firework = (
                <motion.div
                    key={Math.random()} // Dùng key ngẫu nhiên để đảm bảo tính duy nhất
                    initial={{
                        x: Math.random() * 100 - 50, // Vị trí ngẫu nhiên ngang
                        y: -100, // Bắt đầu từ trên
                        opacity: 1,
                        scale: 0,
                    }}
                    animate={{
                        y: "100vh", // Pháo hoa sẽ di chuyển từ trên xuống dưới
                        opacity: 0,
                        scale: size / 5, // Tạo kích thước pháo hoa
                    }}
                    transition={{
                        duration: Math.random() * 2 + 3, // Độ dài của animation pháo hoa
                        delay: delay, // Độ trễ ngẫu nhiên
                        ease: "easeInOut",
                    }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: `${Math.random() * 100}%`, // Vị trí ngẫu nhiên trên màn hình
                        transform: `translateX(${Math.random() * 50 - 25}%)`, // Di chuyển ngang ngẫu nhiên
                        backgroundColor: "red", // Màu đỏ của pháo hoa
                        clipPath:
                            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)", // Hình trái tim
                        width: `${size}px`,
                        height: `${size}px`,
                    }}
                />
            );

            // Thêm pháo hoa vào state
            setFireworks((prev) => [...prev, firework]);
        };

        // Tạo pháo hoa mỗi 200ms
        const interval = setInterval(createFirework, 100);

        // Dọn dẹp interval khi component bị unmount
        return () => clearInterval(interval);
    }, []);

    return <>{fireworks}</>;
};

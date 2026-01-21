import React from "react";
import { Image, Pressable } from "react-native";
const avatarDefault = require("@/assets/images/default-avatar-icon-of-social-media-user-vector.jpg");

const Avatar = ({
  imageUrl,
  className,
}: {
  imageUrl?: string;
  className?: string;
  size?: number;
}) => {
  return (
    <Pressable>
      {imageUrl ? (
        <Image
          className="object-cover border rounded-full w-16 h-16"
          style={{ width: 60, height: 60 }}
          source={{ uri: imageUrl }}
        />
      ) : (
        <Image
          className="object-cover rounded-full border w-16 h-16"
          style={{ width: 60, height: 60 }}
          source={avatarDefault}
        />
      )}
    </Pressable>
  );
};

export default Avatar;

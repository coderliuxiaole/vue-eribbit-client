// 缓存加密
import SecureLS from "secure-ls";

// 加密配置
export default new SecureLS({
  encodingType: "aes",
  isCompression: false,
  encryptionSecret: "old-beauty",
});

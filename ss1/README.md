### Mô tả ngắn gọn về các thư mục và file trong dự án NextJS
1. app : thư mục quản lí, tổ chức các route và thành phần của app.
2. node_modules : chứa thư viện và package cung cấp cho ptoject.
3. .next : giúp tối ưu hóa, lưu trữ các tệp tạm thời và kết quả biên dịch trong project. Không cần tương tác với thư mục này vì Nextjs tự động quản lí.
4. .gitignore : xác định thư mục hoặc tệp bị bỏ qua khi up lên git.
5. public: chứa các thành phần tĩnh như ảnh, video,...
6. next.config.js : tệp cấu hình cho nextjs.
7. tailwind.config.ts : tệp cấu hình cho thư viện tailwind (trong nextjs tailwind tự động được cài).
8. tsconfig.json : tệp cấu hình ts.
9. layout.tsx : 
    - chứa các layout app.
    - children là các thành phần con của ứng dụng.
10. page.tsx : 
    - nội dung của một trang.
    - tạo route tương ứng với url.

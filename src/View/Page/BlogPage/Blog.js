import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import '../BlogPage/Blog.css'
function Blog() {
  return (
    <div>
      <Header />
      <div style={{
        marginTop: '70px',
      }}>
        <div style={{
          backgroundColor: '#B08EAD',
          fontSize: '40px',
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}>
          <h3>Giới Thiệu</h3>
        </div>
        <div style={{
          width: '100%',
          display: 'block',
          //  marginLeft: '360px'

        }}>
          <div style={{
            width: '50%',
            margin: 'auto',

          }}>

            <div style={{
              lineHeight: '1.5'
            }}>
              <h3 style={{ color: 'rgb(75, 48, 73)' }} >Chào mừng bạn đến với Shop bán gối Pillow</h3>
              Chúng tôi tự hào giới thiệu website bán gối của mình, nơi bạn có thể tìm thấy những sản phẩm gối tuyệt vời với đa dạng kiểu dáng, chất liệu và mức giá phù hợp với nhu cầu của mọi người. Với sứ mệnh đem đến sự thoải mái và sự hài lòng cho khách hàng, chúng tôi cam kết cung cấp những sản phẩm gối chất lượng và dịch vụ hoàn hảo.

            </div>
            <div class="video-container">
              <iframe width="100%" height="465" src="https://www.youtube.com/embed/l3lrw7XPcOo" frameborder="0" allowfullscreen></iframe>
            </div>
            <div style={{
              lineHeight: '1.5'
            }}>
              <h4 style={{ color: 'rgb(75, 48, 73)' }}>
                Đa Dạng Về Sản Phẩm
              </h4>
              Website của chúng tôi cung cấp một loạt sản phẩm gối đa dạng, bao gồm:

              Gối Ngủ Cao Cấp: Chúng tôi cung cấp các loại gối ngủ đa dạng,
              từ gối lông vũ mềm mịn đến gối bông cao cấp với nhiều lựa chọn về cỡ, kiểu dáng và màu sắc. <br /> <br />
              Gối Ôm Trẻ Em: Để đảm bảo giấc ngủ an lành cho trẻ em,
              chúng tôi có sẵn các sản phẩm gối ôm chất lượng, được thiết kế đáng yêu với hình ảnh các nhân vật hoạt hình yêu thích. <br /><br />

              Gối Trang Trí Nội Thất: Nếu bạn đang tìm kiếm gối để trang trí ngôi nhà của mình, chúng tôi có nhiều tùy chọn về gối
              trang trí với các họa tiết và màu sắc phong cách.<br /><br />
            </div>

            <div style={{
              lineHeight: '1.5'
            }}>
              <h4 style={{ color: 'rgb(75, 48, 73)' }}>
                Chất Lượng Vượt Trội

              </h4>
              Chất lượng là ưu tiên hàng đầu tại website bán gối của chúng tôi.
              Tất cả sản phẩm được chọn lựa kỹ càng và kiểm tra để đảm bảo rằng chúng đáp ứng tiêu chuẩn cao nhất.
              Chất liệu làm gối được lựa chọn với cẩn thận để đảm bảo sự thoải mái và bền bỉ. Chúng tôi tin rằng việc sử dụng sản phẩm gối
              của chúng tôi sẽ làm cho giấc ngủ của bạn trở nên hoàn hảo hơn.<br /><br />
              Chúng tôi cam kết đem đến trải nghiệm mua sắm trực tuyến thoải mái và tận tâm.
              Chúng tôi luôn sẵn sàng hỗ trợ bạn trong việc lựa chọn sản phẩm phù hợp và giải đáp mọi thắc mắc.
              Giao hàng nhanh chóng và dịch vụ khách hàng xuất sắc là những gì bạn có thể mong đợi từ chúng tôi. <br /><br />
              <h3 style={{ color: 'rgb(75, 48, 73)' }}>
                Hướng dẫn mua hàng
              </h3>
              <div>
                Đăng Nhập Hoặc Đăng Ký Tài Khoản:
                Nếu bạn đã có tài khoản trên trang web, bạn sẽ cần đăng nhập. Nếu không, bạn có thể chọn đăng ký một tài khoản mới.<br /><br />
              </div>
              <div>
                Tìm Sản Phẩm Gối:

                Sử dụng thanh tìm kiếm hoặc danh mục sản phẩm để tìm sản phẩm gối bạn muốn mua.
                Bạn cũng có thể duyệt qua các danh mục sản phẩm để khám phá các lựa chọn khác. <br /><br />
                Chọn Sản Phẩm:

                Khi bạn đã tìm thấy sản phẩm gối bạn quan tâm, nhấp vào nó để xem chi tiết sản phẩm. <br />
                Thêm Sản Phẩm Vào Giỏ Hàng:
                Sau khi bạn đã chọn sản phẩm, nhấp vào nút "Thêm vào giỏ hàng".<br />
                Kiểm Tra Giỏ Hàng:
                Trong phần giỏ hàng, bạn có thể xem tóm tắt của tất cả sản phẩm bạn đã chọn.<br /> <br />
                Tiến Hành Đặt Hàng:
                Sau khi kiểm tra giỏ hàng, bạn sẽ có một tùy chọn "Thanh toán"
                Nhấp vào nút này để bắt đầu quá trình thanh toán.
              </div>

              <h4 style={{ color: 'rgb(75, 48, 73)' }}>
                Liên Hệ Với Chúng Tôi
              </h4>
              Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, đừng ngần ngại liên hệ với chúng tôi qua email . Chúng tôi sẽ rất vui lòng được phục vụ bạn.  <br />
              <br />
              Hãy truy cập website của chúng tôi và bắt đầu khám phá thế giới của những sản phẩm gối cao cấp và chất lượng hôm nay.
            </div>
            <div>
              <a href='https://pillowshop.vercel.app/' style={{ textDecoration: 'none' }} > <h3>Website Bán Gối - Sự Thoải Mái Đích Thực</h3></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog